import './roadmap-filters.component.scss';

import { MouseEventHandler, useState } from 'react';

import { IconButton, Menu } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Checkbox } from '@shared-components/checkbox/checkbox.component';

import { filterOptions } from '../configs/roadmap-filters.config';
import { FilterValue } from '../typings/roadmap-filters.type';

export const RoadmapFilters = (): JSX.Element => {
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
        <FilterListIcon className="filters__icon" />
      </IconButton>
      <Menu
        className="roadmap-filters"
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
        // getContentAnchorEl={null}
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
            onChange={({ target }) => setFilter({ ...filter, [target.value]: target.checked })}
          />
        ))}
      </Menu>
    </>
  );
};
