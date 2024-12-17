import { Link, List, ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";

import React, { useState } from "react";

const options = [
  { pagina: 'Inicio', href: '/inicio' },
  { pagina: 'Cadastro de demandas', href: '/cadastro'},
  { pagina: 'Lista de demandas', href: '/listademanda'}
];

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={options[selectedIndex].pagina}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        >
        {options.map((option) => (
          <Link 
            key={option.pagina} 
            href={option.href}
            underline="none"
            color="black"
          >
            <MenuItem
            onClick={handleClose}
            >
              {option.pagina}
            </MenuItem>
          </Link>
        ))}
      </Menu> 
    </div>
  )
}

export default MenuButton;