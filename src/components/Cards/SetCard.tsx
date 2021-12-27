import { Set } from '../../lib/types/set';
import Card from './Card';
import ItemCard from './ItemCard';

interface SetCardProps {
    set: Set;
}

const add = (accumulator: number, num: number) => accumulator + num;

const SetCard: React.FC<SetCardProps> = ({ set: { title, items } }) => {
    const priceSum = items.map(item => parseInt(item.price!)).reduce(add, 0);
    return (
        <Card>
            <h1>{title}</h1>
            <p>{priceSum}</p>
            <div className='flex'>
                {items.map(item => (
                    // <div key={item.id}>
                    //     <p>{item.title}</p>
                    // </div>
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </Card>
    );
};

export default SetCard;
