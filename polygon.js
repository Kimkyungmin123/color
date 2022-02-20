const PI2 = Math.PI * 2;

const COLORS = [
    
    '#E89AC3',
    '#D6C8DC',
    '#C8F2F5',
    '#9BE8E1',
    '#C7D6E5',
    '#E1CEE9',
    '#CFBFEA',
    '#DEBACC',
    '#EEB6A6',
    '#EF8E79',
    '#EDB79B',
    '#E9EBC8',
    '#E1DCC1',
    '#A6CFC2',
    '#68BEC1',

];

export class Polygon {
    constructor(x, y, radius, sides){
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;

    }

    animate(ctx, moveX){
        ctx.save();


        const angle = PI2 / this.sides;
        const angle2 = PI2 / 4;     // here3

        ctx.translate(this.x, this.y);

        this.rotate += moveX * 0.008;   // +하면 돌리는 쪽으로 돌아가고, -하면 돌리는 반대 방향으로 돌아감
        ctx.rotate(this.rotate);

        for(let i =0; i < this.sides; i++){
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

            
            ctx.save();
            ctx.fillStyle = COLORS[i]; 
            ctx.translate(x, y);
            ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
            ctx.beginPath();
            for(let j =0; j < 4 ; j ++){
                // 꼭짓점에 위치한 도형 크기
                const x2 = 160 * Math.cos(angle2 * j);  
                const y2 = 160 * Math.sin(angle2 * j);
                ( j ==0) ? ctx.moveTo(x2, y2) :ctx.lineTo(x2, y2);
            }
            ctx.fill();
            ctx.closePath();
            ctx.restore();




        }
        
        
        ctx.restore();

    }
}

