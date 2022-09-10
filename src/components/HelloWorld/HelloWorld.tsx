import { Wrapper } from "./style"

type HelloWorldProps = {
  title?: string
}

export function HelloWorld({ title = "Hello World! dddddd" }: HelloWorldProps) {
  return <Wrapper aria-label="hello world">{title}</Wrapper>
}
