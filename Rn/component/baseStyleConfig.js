import {Dimensions} from 'react-native';
/**
 * window size
 */
export const {width, height, scale} = Dimensions.get('window');

/**
 * flexbox config
 * flexDirection
 */
export const row            = 'row';
export const row_reverse    = 'row-reverse';
export const column         = 'column';
export const column_reverse = 'column-reverse';

/**
 * flexbox config
 * justifyContent
 * alignItems
 * alignSelf
 */
export const flex_start     = 'flex-start';
export const flex_end       = 'flex-end';
export const center         = 'center';
export const space_between  = 'space-between';
export const space_around   = 'space-around';

// alignItems
export const baseline       = 'baseline';
export const stretch        = 'stretch';

// alignSelf
export const auto           = 'nowrap';

/**
 * flexbox config
 * flexWrap
 */
export const nowrap         = 'nowrap';
export const wrap           = 'wrap';
export const wrap_reverse   = 'wrap-reverse';

/**
 * regular color
 */
export const red            = 'red';
export const white          = 'white';
export const black          = 'black';
export const blue           = 'blue';
export const orange         = 'orange';
export const purple         = 'purple';

