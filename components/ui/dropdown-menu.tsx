import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const baseItem =
  'flex cursor-pointer select-none items-center gap-3 rounded-sm px-3 py-2 text-sm text-slate-700 outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className = '', sideOffset = 6, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`z-50 min-w-[220px] overflow-hidden rounded-md border border-slate-200 bg-white p-2 shadow-lg ${className}`}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className = '', ...props }, ref) => (
  <DropdownMenuPrimitive.Item ref={ref} className={`${baseItem} ${className}`} {...props} />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
