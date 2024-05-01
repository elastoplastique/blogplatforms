import { MainNavigation } from '@/components/layout/main-navigation';
import { MainFooter } from './main-footer';
import { DecorationWaves } from '@/components/decorative/waves';
import { Flex } from '@radix-ui/themes';

const NavWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <div id="main-navigation-wrapper" className="!w-full h-16 fixed top-0 left-0 right-0 flex items-center justify-center z-10">
      {children}
    </div>
    <div className="min-h-[80px]" />
  </>
);

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavWrapper>
        <MainNavigation />
      </NavWrapper>
      <div id="main-layout">{children}</div>

      <MainFooter />
    </>
  );
};
