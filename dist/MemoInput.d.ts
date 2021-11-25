/// <reference types="react" />
interface IProps {
    memoColor?: string;
    contents?: any;
    width: string;
    height: string;
    title?: any;
    titleStyle?: any;
    description?: any;
    descriptionStyle?: any;
    captionSize?: number;
    captionColor?: string;
}
export declare const MemoInput: (props: IProps) => JSX.Element;
export default MemoInput;
