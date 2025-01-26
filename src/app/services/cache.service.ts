import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: { [key: string]: any } = {};

  set(key: string, data: any): void {
    console.log(`Setting cache for key: ${key}, data:`, data);
    this.cache[key] = data;
  }

  get(key: string): any {
    console.log(`Getting cache: key=${key}`);
    return this.cache[key] || null;
  }

  clear(key?: string): void {
    if (key) {
      delete this.cache[key];
    } else {
      this.cache = {};
    }
  }
}