import { signOut } from 'next-auth/react';
import { BiHome } from "react-icons/bi";
import { BiBell } from 'react-icons/bi';
import { VscAccount } from "react-icons/vsc";
import { RiLogoutBoxLine } from "react-icons/ri";


import useCurrentUser from '../../hooks/useCurrentUser';

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
  
    const items = [
      {
        icon: BiHome,
        label: 'Home',
        href: '/',
      },
      {
        icon: BiBell,
        label: 'Notifications',
        href: '/notifications',
        auth: true,
        alert: currentUser?.hasNotification
      },
      {
        icon: VscAccount,
        label: 'Profile',
        href: `/users/${currentUser?.id}`,
        auth: true,
      },
    ]
  
    return (
      <div className="col-span-1 h-full bg-neutral-900 pr-4 md:pr-6">
          <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230px]">
              <SidebarLogo />

              {/* Conditional rendering of the message */}
              {currentUser && (
                <div className="text-rose-300 text-2xl mb-2 font-mono ...">
                  Hi {currentUser.name}!
                </div>
              )}

              {items.map((item) => (
                <SidebarItem
                  key={item.href}
                  alert={item.alert}
                  auth={item.auth}
                  href={item.href} 
                  icon={item.icon} 
                  label={item.label}
                />
              ))}
              {currentUser && <SidebarItem onClick={() => signOut()} icon={RiLogoutBoxLine} label="Logout" />}
              <SidebarTweetButton />
            </div>
          </div>
        </div>
    )
  };
  
  export default Sidebar;
  