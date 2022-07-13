import { SvgIcon, SvgIconProps } from '@mui/material';

import { ReactComponent as StarOutlined } from 'assets/StarOutlined.svg';
import { ReactComponent as StarContained } from 'assets/StarContained.svg';
import { ReactComponent as Check } from 'assets/Check.svg';
import { ReactComponent as Unchecked } from 'assets/Unchecked.svg';
import { ReactComponent as Close } from 'assets/Close.svg';
import { ReactComponent as Search } from 'assets/Search.svg';
import { ReactComponent as TaskListPlain } from 'assets/TaskListPlain.svg';
import { ReactComponent as Loader } from 'assets/Loader.svg';

export const StarOutlinedIcon = (props: SvgIconProps) => <SvgIcon {...props} component={StarOutlined} inheritViewBox />;

export const StarContainedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} component={StarContained} inheritViewBox />
);

export const CloseIcon = (props: SvgIconProps) => <SvgIcon {...props} component={Close} />;

export const SearchIcon = (props: SvgIconProps) => <SvgIcon {...props} component={Search} inheritViewBox />;

// CheckIcon is not in use - MUI Checkbox needs two icons for customization: filled with check and empty
// UncheckedIcon is downloaded component from Figma as SVG for better UI

export const CheckIcon = (props: SvgIconProps) => <SvgIcon {...props} component={Check} />;

export const UncheckedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} component={Unchecked} viewBox="-2 -2 24 24" />
);
export const TaskListPlainIcon = () => <TaskListPlain />;

export const LoaderIcon = () => <Loader />;
