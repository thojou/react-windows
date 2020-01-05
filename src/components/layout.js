import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Area, Grid, TitleArea, WindowBody, WindowWrapper } from './styled';
import Buttons from './buttons';

const WindowLayout = ({ focused, minimized, maximized, onMinimize, onRestore, onMaximize, onClose, children }) => {
  const areas = useMemo(() => minimized ? "'title action'" : "'title action' 'body body'", [minimized]);
  const rows = useMemo(() => minimized ? '37px' : 'auto 1fr', [minimized]);

  return (
    <WindowWrapper focused={focused} minimized={minimized} maximized={maximized}>
      <Grid
        focused={focused}
        minimized={minimized}
        maximized={maximized}
        areas={areas}
        columns='1fr auto'
        rows={rows}
      >
        <TitleArea
          name='title'
          className='window-draggable'
        >WindowName
        </TitleArea>
        <TitleArea
          name='action'
          className='window-draggable'
        >
          <Buttons
            minimize={!minimized}
            maximize={!maximized && !minimized}
            restore={minimized || maximized}
            close={true}
            onMinimize={onMinimize}
            onRestore={onRestore}
            onMaximize={onMaximize}
            onClose={onClose}
          />
        </TitleArea>
        {!minimized &&
          <Area name='body'>
            <WindowBody>{children}</WindowBody>
          </Area>}
      </Grid>
    </WindowWrapper>
  );
};

WindowLayout.propTypes = {
  focused: PropTypes.bool,
  minimized: PropTypes.bool,
  maximized: PropTypes.bool,
  onMinimize: PropTypes.func,
  onRestore: PropTypes.func,
  onMaximize: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.any
};

WindowLayout.defaultProps = {

};

export default WindowLayout;
