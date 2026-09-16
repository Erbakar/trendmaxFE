import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ORDER_ID_PATTERN = /^TMX[0-9a-f]{32}$/i;

export class FileOrderStore {
  constructor(directory) {
    this.directory = path.resolve(directory);
  }

  async init() {
    await mkdir(this.directory, { recursive: true, mode: 0o700 });
  }

  getOrderPath(orderId) {
    if (!ORDER_ID_PATTERN.test(orderId)) {
      return null;
    }

    return path.join(this.directory, `${orderId}.json`);
  }

  async get(orderId) {
    const orderPath = this.getOrderPath(orderId);
    if (!orderPath) {
      return null;
    }

    try {
      return JSON.parse(await readFile(orderPath, 'utf8'));
    } catch (error) {
      if (error?.code === 'ENOENT') {
        return null;
      }
      throw error;
    }
  }

  async set(orderId, order) {
    const orderPath = this.getOrderPath(orderId);
    if (!orderPath) {
      throw new Error('Invalid order id');
    }

    const temporaryPath = `${orderPath}.${process.pid}.${Date.now()}.tmp`;
    await writeFile(temporaryPath, JSON.stringify(order, null, 2), {
      encoding: 'utf8',
      mode: 0o600,
    });
    await rename(temporaryPath, orderPath);
    return order;
  }
}
