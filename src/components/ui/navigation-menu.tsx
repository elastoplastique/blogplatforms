import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, List, Item, Content, Trigger, Link, Indicator, Viewport } from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
// import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const NavigationMenu = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, children, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        'relative py-2 z-10 flex flex-1 items-start justify-center px-2 !backdrop-blur-2xl w-full min-w-[300px] max-w-[80vw]',
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  )
);
NavigationMenu.displayName = Root.displayName;

const NavigationMenuList = forwardRef<ElementRef<typeof List>, ComponentPropsWithoutRef<typeof List>>(({ className, ...props }, ref) => (
  <List ref={ref} className={cn('group flex flex-1 list-none items-center justify-start space-x-1', className)} {...props} />
));
NavigationMenuList.displayName = List.displayName;

const NavigationMenuItem = Item;

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-8 w-max items-center justify-center rounded-xl bg-background px-4 py-0 text-sm font-medium transition-colors hover:bg-accent/90 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/90 data-[state=open]:bg-accent/50 mx-2'
);

const NavigationMenuTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, children, ...props }, ref) => (
    <Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), 'group', className)} {...props}>
      {children}{' '}
      {/* <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    /> */}
    </Trigger>
  )
);
NavigationMenuTrigger.displayName = Trigger.displayName;

const NavigationMenuContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
        className
      )}
      {...props}
    />
  )
);
NavigationMenuContent.displayName = Content.displayName;

const NavigationMenuLink = Link;

const NavigationMenuViewport = forwardRef<ElementRef<typeof Viewport>, ComponentPropsWithoutRef<typeof Viewport>>(
  ({ className, ...props }, ref) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
      <Viewport
        className={cn(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
);
NavigationMenuViewport.displayName = Viewport.displayName;

const NavigationMenuIndicator = forwardRef<ElementRef<typeof Indicator>, ComponentPropsWithoutRef<typeof Indicator>>(
  ({ className, ...props }, ref) => (
    <Indicator
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-xl-sm bg-border shadow-md" />
    </Indicator>
  )
);
NavigationMenuIndicator.displayName = Indicator.displayName;

export {
  // navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  // NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
