import BasicPage from './basic-page'

export default function MillPost(props) {
    const {title} = props
    return <BasicPage title={title}>
        <div className="flex justify-center">
            <div className="text-lg bg-gray-300 mx-center text-center mb-4 p-2" >This is part of my <a href="/project/cnc-mill">series</a> on my CNC mill. Feel free to <a href="https://twitter.com/NickParkerPrint">tweet</a> at
            me about it</div>
        </div>
        <article>
            <div className="markdown">
                {props.children === undefined ? "It looks like I haven't written this yet..." : props.children
            }
            </div>
        </article>
    </BasicPage>
  }