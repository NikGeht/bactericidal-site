import { H1, H3 } from '../../components';
import styles from './contacts.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { Footer } from '../../components/footer/Footer.jsx';
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
                        href="https://yandex.com/maps/-/CLXdu2Jn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        634050, г. Томск, пр. Ленина, д. 30
                    </a>
                    <H3>Телефон</H3>
                    <a
                        href="tel:+79135754070"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        +7 (913) 575-40-70
                    </a>
                    <H3>Email</H3>
                    <a
                        href="mailto:info@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        info@exam ple.com
                    </a>
                </div>
                <div className={styles.rightSide}>
                    {map && (
                        <div className={styles.mapContainer}>
                            <MapContainer
                                center={[56.46539, 84.950164]}
                                zoom={16}
                                style={{
                                    height: 400,
                                    width: '100%',
                                    borderRadius: 12,
                                }}
                                zoomControl={false}
                                attributionControl={true}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; OpenStreetMap contributors"
                                />
                                <Marker position={[56.46539, 84.950164]}>
                                    <Popup>
                                        <h3>ООО "Антибактериум"</h3>
                                        <p>
                                            634050, г. Томск, пр. Ленина, д. 30
                                        </p>
                                        <a href="tel:+79135754070">
                                            +7 (913) 575-40-70
                                        </a>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
