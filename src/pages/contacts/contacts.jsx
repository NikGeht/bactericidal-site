import { H1, H3 } from '../../components';
import styles from './contacts.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
export const Contacts = () => {
    const [map, setMap] = useState(null);
    useEffect(() => {
        setMap(true);
    }, []);
    return (
        <div className={styles.container}>
            <H1>Контакты</H1>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <H3>Компания</H3>
                    <p>ООО "Антибактериум"</p>
                    <H3>Адрес</H3>
                    <a
                        href="https://yandex.ru/maps/216/zelenograd/?indoorLevel=1&ll=37.173329%2C55.978468&mode=whatshere&whatshere%5Bpoint%5D=37.173094%2C55.978573&whatshere%5Bzoom%5D=16.87&z=16.87"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        123456, г. Москва, ул. Ленина, д. 1
                    </a>
                    <H3>Телефон</H3>
                    <a
                        href="tel:+79999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        +7 (999) 999-99-99
                    </a>
                    <H3>Email</H3>
                    <a
                        href="mailto:info@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        info@example.com
                    </a>
                </div>
                <div className={styles.rightSide}>
                    {map && (
                        <div className={styles.mapContainer}>
                            <MapContainer
                                center={[55.97857, 37.17309]}
                                zoom={16}
                                style={{
                                    height: 400,
                                    width: '100%',
                                    borderRadius: 12,
                                }}
                                zoomControl={false}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; OpenStreetMap contributors"
                                />
                                <Marker position={[55.97857, 37.17309]}>
                                    <Popup>
                                        <H3>ООО "Антибактериум"</H3>
                                        <p>
                                            123456, г. Москва, ул. Ленина, д. 1
                                        </p>
                                        <a href="tel:+79999999999">
                                            +7 (999) 999-99-99
                                        </a>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
