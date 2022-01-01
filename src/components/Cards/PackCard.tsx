import { Link } from 'react-router-dom';
import { Pack } from '../../lib/types/pack';
import Card from './Card';
import ItemThumbnailCard from './ItemThumbnailCard';

interface PackCardProps {
    pack: Pack;
}

const add = (accumulator: number, num: number) => accumulator + num;

const PackCard: React.FC<PackCardProps> = ({ pack: { title, items, id } }) => {
    const priceSum = items.map(item => parseInt(item.price!)).reduce(add, 0);
    const kgSum = items.map(item => parseFloat(item.weight!)).reduce(add, 0);
    return (
        <Link to={`/pack/${id}`}>
            <Card>
                <div>
                    <h1 className='text-lg font-bold lg:text-xl mb-3'>
                        {title}
                    </h1>
                    <div className='text-gravel mb-5'>
                        <p>{kgSum} kg</p>
                        <p>{priceSum} €</p>
                    </div>
                    <div className='flex'>
                        {items.map(item => (
                            <ItemThumbnailCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default PackCard;
