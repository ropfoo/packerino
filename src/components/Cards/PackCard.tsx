import { Pack } from '../../lib/types/pack';
import Card from './Card';
import ItemCard from './ItemCard';

interface PackCardProps {
    pack: Pack;
}

const add = (accumulator: number, num: number) => accumulator + num;

const PackCard: React.FC<PackCardProps> = ({ pack: { title, items } }) => {
    const priceSum = items.map(item => parseInt(item.price!)).reduce(add, 0);
    const kgSum = items.map(item => parseFloat(item.weight!)).reduce(add, 0);
    return (
        <Card>
            <div>
                <h1 className='text-lg mb-3'>{title}</h1>
                <div className='text-gravel mb-5'>
                    <p>{kgSum} kg</p>
                    <p>{priceSum} €</p>
                </div>
                <div className='grid md:grid-flow-col'>
                    {items.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default PackCard;
