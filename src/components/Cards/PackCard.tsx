import { Pack } from '../../lib/types/pack';
import Card from './Card';
import ItemCard from './ItemCard';

interface PackCardProps {
    pack: Pack;
}

const add = (accumulator: number, num: number) => accumulator + num;

const PackCard: React.FC<PackCardProps> = ({ pack: { title, items } }) => {
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

export default PackCard;
