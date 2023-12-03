import { generateImageObject } from './image';
import { META } from '@/constants/meta';


export type RichDataAboutProps = {
    name: string;
    url: string;
}

export function generateAbout(data: RichDataAboutProps): RichData.About {
    return {
        '@type': 'Thing',
        name: data.name,
        url: data.url,
        sameAs: data.url
    };
}