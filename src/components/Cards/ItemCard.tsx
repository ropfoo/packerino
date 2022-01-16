import React from 'react';
import { Link } from 'react-router-dom';
import { Item, ItemCardConfig } from '../../lib/types/item';
import LinkButton from '../Buttons/IconButtons/LinkButton';
import Tag from '../Tag';
import Card from './Card';

interface ItemCardProps {
    item: Item;
    config?: ItemCardConfig;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, config }) => {
    return (
        <Link to={`/item/${item.id}`}>
            <Card>
                <div className='flex justify-between w-full'>
                    <div className='flex'>
                        {item.imageUrl ? (
                            <img
                                className='
                                h-20
                                w-20
                                object-cover
                                rounded-2xl
                                '
                                src={item.imageUrl}
                                alt={item.title}
                            />
                        ) : (
                            <div className='h-20 w-20 bg-night rounded-2xl'></div>
                        )}
                        <div className='px-5'>
                            <div className='text-dirt font-bold text-lg mb-1'>
                                {item.title}
                            </div>
                            <div className='flex'>
                                {item.tags?.map(tag => (
                                    <Tag key={tag} tagName={tag} />
                                ))}
                            </div>
                            {config?.price && <div>{item.price}€</div>}
                            {config?.weight && <div>{item.weight}kg</div>}
                        </div>
                    </div>
                    <div>
                        <div>
                            {item.url && (
                                <LinkButton
                                    onClick={() =>
                                        item.url &&
                                        window.location.replace(item.url)
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={`
                    w-24
                    h-12
                    ${item.owning ? 'bg-stonewet' : 'bg-fox'}
                    absolute
                    right-0
                    bottom-0
                    translate-y-10
                    translate-x-10
                    -rotate-[40deg]
                `}
                />
            </Card>
        </Link>
    );
};

export default ItemCard;
