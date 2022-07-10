import { SvgIcon, SvgIconProps } from '@mui/material';

import { ReactComponent as StarOutlined } from 'assets/StarOutlined.svg';
import { ReactComponent as StarContained } from 'assets/StarContained.svg';
import { ReactComponent as Check } from 'assets/Check.svg';
import { ReactComponent as Close } from 'assets/Close.svg';
import { ReactComponent as Search } from 'assets/Search.svg';
import { ReactComponent as TaskListPlain } from 'assets/TaskListPlain.svg';
import { ReactComponent as Loader } from 'assets/Loader.svg';

export const StarOutlinedIcon = (props: SvgIconProps) => <SvgIcon {...props} component={StarOutlined} />;

export const StarContainedIcon = (props: SvgIconProps) => <SvgIcon {...props} component={StarContained} />;

export const CheckIcon = (props: SvgIconProps) => <SvgIcon {...props} component={Check} />;

export const CloseIcon = (props: SvgIconProps) => <SvgIcon {...props} component={Close} />;

export const SearchIcon = (props: SvgIconProps) => <SvgIcon {...props} component={Search} />;

export const TaskListPlainIcon = () => <TaskListPlain />;

export const LoaderIcon = () => <Loader />;
