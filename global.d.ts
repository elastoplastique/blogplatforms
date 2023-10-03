import * as BlogPlatforms from "./blog-platforms"

declare global {
    declare type PlatformSort = BlogPlatforms.PlatformSort
    declare type PlatformsParams = BlogPlatforms.PlatformsParams
    declare type PlatformNode = BlogPlatforms.PlatformNode
    declare type UltimateSubcollectionNode = BlogPlatforms.UltimateSubcollectionNode
    declare type PlatformAccounts = BlogPlatforms.PlatformAccounts

    declare type IconType = {
        size: number;
        color: string;
        strokeWidth: number;
        absoluteStrokeWidth?: boolean;
    }
    declare type NavLinkType = {
        path: string,
        text: string,
        description?: string,
        html?: string,
        children?: NavLinkType[]
        icon?: string
    }
    declare type StaticPaths = {
        params: { slug: string }
    }

    declare type FrontMatter = {
        title: string,
        slug?: string,
        description?: string,
        cover?: string,
        tags?: string[],
    }
    declare type FullContent = {
        frontMatter: FrontMatter,
        content: string
    }

}

declare module "remark-relative-links";