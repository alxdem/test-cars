'use client'

import {CacheProvider} from '@emotion/react';
import {ReactNode} from 'react';
import {emotionCache} from '@/app/providers/emotionCache';

export default function EmotionRegistry({children}: { children: ReactNode }) {
    return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}