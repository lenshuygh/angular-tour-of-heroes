import { InjectionToken } from '@angular/core';

export interface AppConfig{
    heroesApiSource: string;
    heroesUrl_external: string;
    heroesUrl_mocked: string;
}

export const HERO_API_CONFIG: AppConfig = {
    heroesApiSource: 'external',
    heroesUrl_external: 'http://angulartests.mocklab.io',
    heroesUrl_mocked: 'api/heroes'
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');