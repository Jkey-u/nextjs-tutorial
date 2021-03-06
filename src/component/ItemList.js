import { Grid } from 'semantic-ui-react';
import styles from './ItemList.module.css';
import Link from 'next/link';

export default function ItemList({list}) {

    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list && list.map((item) => (
                       <Grid.Column key={item.id}>
                           <div className={styles.wrap}>
                               <Link href="/detail/[id]" as={`detail/${item.id}`}>
                                    <a>
                                        <img 
                                        src={item.image_link} 
                                        alt={item.name} 
                                        className={styles.img_item} 
                                    />
                                    <strong className={styles.tit_item}>{item.name}</strong>
                                    <span className={styles.txt_info}>
                                        {item.category} {item.product_type}
                                    </span>
                                    <strong className={styles.num_price}>${item.price}</strong>
                                    </a>
                               </Link>
                                
                            </div>
                        </Grid.Column> 
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}