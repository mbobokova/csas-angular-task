/**
 * This CacheService is not persistent across page refreshes 
 * or application reloads. 
 * 
 * For reloads required, I am using `localStorage`
 */

/**import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: { [key: string]: any } = {};

  // Set data in cache
  set(key: string, data: any): void {
    console.log('Setting cache for key: ${key}, data:', data);
    this.cache[key] = data;
  }

  // Get data from cache
  get(key: string): any {
    console.log('Getting cache: key=${key}');
    return this.cache[key] || null;
  }

  // Clear cache
  clear(key?: string): void {
    if (key) {
      delete this.cache[key];
    } else {
      this.cache = {};
    }
  }
}
*/
