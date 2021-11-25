/// <reference types="react" />
interface IProps {
    open: boolean;
    width: string;
    height: string;
    color?: string;
    title?: any;
    titleStyle?: any;
    description?: any;
    descriptionStyle?: any;
}
declare function Memo(props: IProps): JSX.Element;
export default Memo;
