import React from "react";


export class High extends React.Component {

    public state: {
        title: string,
        el: HTMLCanvasElement,
        c: CanvasRenderingContext2D,
    };

    public warp = {
        width: '600px',
        height: '600px',
        border: '2px solid #ffffff'
    };

    constructor(props: any) {
        super(props);
    }

    testFunction(str: string): void {
        console.log(str);
    }

    renderLine(c: CanvasRenderingContext2D): void {
        c.beginPath();
        c.moveTo(0, 100);
        c.moveTo(600, 100);
        c.fill();
        console.log(c);
    }

    componentWillMount(): void {
        this.setState({
            title: 'Canvas Animate'
        })
    }

    componentDidMount(): void {
        setTimeout(() => {
            const elementById = document.getElementById('high-canvas') as HTMLCanvasElement;
            const context = elementById.getContext('2d');
            this.setState({
                el: elementById,
                c: context
            });
            if (context) {
                this.renderLine(context);
            }
        }, 20);

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h1 onClick={(e) => {this.testFunction('aaa')}}>{this.state.title}</h1>
                <div style={this.warp}>
                    <canvas id="high-canvas"/>
                </div>

            </div>
        );
    }
}
