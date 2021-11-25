# React Simple Memo
a react component to write memo for some text

## Demo
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/19369750/143375809-29712b2b-d81f-42bb-a9e7-3b93283048b7.gif)

## Installation

```
npm install --save react-simple-memo
```

## Usage
```
import { MemoInput } from "react-simple-memo";

//...

function App() {
  return (
    <div>
      <MemoInput
        contents={"Lorem"}
        width={"400px"}
        height={"300px"}
        title={"Lorem"}
        description={
          <div style={{ width: "380px", height: "200px", overflow: "auto" }}>
            "In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. It is also
            used to temporarily replace text in a process called greeking, which
            allows designers to consider the form of a webpage or publication,
            without the meaning of the text influencing the design."
          </div>
        }
        memoColor={"orange"}
      />{" "}
      ipsum dolor sit amet consectetur adipisicing elit. Libero hic blanditiis
      veniam aliquid repellendus quia, non eaque quaerat officia possimus
      ...
    </div>
  );
}

export default App;

//...

```

## Props

### 1. memoColor
* optional
* string

This prop sets the color of memo sheet and text(when the text is clicked)

### 2. contents
* optional
* any

This is the contents that will be used for memo

### 3. width, height
* required
* string

This props set the size of memo sheet

### 4. title, description
* optional
* string

This prop set the title and description of memo shhet

### 5. titleStyle, descriptionStyle
* optional
* any

You can apply your inline-css style to title field

### 6. captionSize
* optional
* number

This means the size(px) of icon above the contents

### 7. captionColor
* optional
* string

This means the color of icon above the contents
