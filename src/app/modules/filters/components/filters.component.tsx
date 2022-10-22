import './filters.component.scss';

import { MouseEventHandler } from 'react';

import { useState } from 'preact/compat';

import { IconButton, Menu } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import { useTheme } from '@global-features/theme/use-theme.hook';
import { Checkbox } from '@shared-components/checkbox/checkbox.component';

import { filterOptions } from '../configs/filter-options.config';
import { FilterValue } from '../typings/filter-options.type';

export const Filters = (): JSX.Element => {
  const { themeConfig } = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filter, setFilter] = useState<Record<FilterValue, boolean>>({
    eng: false,
    ru: false,
    video: false,
    article: false,
  });

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="Filters" onClick={handleClick}>
        <FilterListIcon htmlColor={themeConfig.basicPalette?.['color-basic-800']} />
      </IconButton>
      <Menu
        className="filters"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
        keepMounted
      >
        <p className="filters__title">Материалы:</p>

        {filterOptions.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            label={
              <>
                {option.icon} {option.labelText}
              </>
            }
            checked={filter[option.value]}
            onChange={(e, target) => {
              setFilter({ ...filter, [target.value]: target.checked });
            }}
          />
        ))}
      </Menu>
    </>
  );
};
