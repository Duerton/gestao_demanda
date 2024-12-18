import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const options = [
  { pagina: 'Inicio', href: '/inicio' },
  { pagina: 'Cadastro de demandas', href: '/cadastro/edit/new'},
  { pagina: 'Lista de demandas', href: '/listademanda'}
];

export default function LongMenu() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon fontSize='large'/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <Link 
            key={option.pagina} 
            href={option.href}
            style={{color:'black', textDecoration: 'none'}}
          >
            <MenuItem
              key={option.pagina}
              onClick={handleClose}
            >
              {option.pagina}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}