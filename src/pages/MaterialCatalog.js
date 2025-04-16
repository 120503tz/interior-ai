import React from 'react';

const materials = [
  {
    name: "Oak Wood",
    type: "Flooring",
    image: "https://liberon.co.uk/wp-content/uploads/2016/11/oak-613x345.png",
    alt: "Natural oak wood floor with light grain"
  },
  {
    name: "White Marble",
    type: "Countertop",
    image: "https://www.replicasurfaces.com/cdn/shop/products/white-marble-1_800x.png?v=1721768104",
    alt: "White marble surface with light gray veining"
  },
  {
    name: "Velvet",
    type: "Upholstery",
    image: "https://i.ebayimg.com/images/g/vE8AAOSwWdhjZSaQ/s-l1200.jpg",
    alt: "Soft purple velvet fabric texture"
  },
  {
    name: "Matte Black Finish",
    type: "Appliance Finish",
    image: "https://www.forgeline.com/product_images/forgeline/MatteBlack-large-366--v.jpg",
    alt: "Matte black surface with brushed metal texture"
  },
  {
    name: "Bamboo",
    type: "Flooring",
    image: "https://lumberliquidators.com/cdn/shop/files/10047931_rs.jpg?v=1744438062&width=1500",
    alt: "Smooth bamboo wood planks in golden tone"
  },
  {
    name: "Granite",
    type: "Countertop",
    image: "https://www.megagranite.com/wp-content/uploads/2023/01/Royal-White-Granite-1024x683-1.jpeg",
    alt: "Granite kitchen surface in dark gray and white"
  },
  {
    name: "Suede",
    type: "Upholstery",
    image: "https://i.etsystatic.com/10618834/r/il/3c2cce/3818839075/il_570xN.3818839075_6msh.jpg",
    alt: "Soft brown suede fabric with texture detail"
  },
  {
    name: "Glass",
    type: "Tabletop",
    image: "https://cdn.shopify.com/s/files/1/0555/4271/0370/files/Rectangle-clear-glass-table-with-pipe-base_page.jpg?v=1656613166",
    alt: "Transparent frosted glass surface"
  },
  {
    name: "Chrome",
    type: "Metal Finish",
    image: "https://t4.ftcdn.net/jpg/06/13/22/73/360_F_613227360_SJOYFdjVbXYbcgkjhEp4ZiRnvQEMygDj.jpg",
    alt: "Reflective chrome surface texture"
  },
  {
    name: "Linen",
    type: "Fabric",
    image: "https://steamerystockholm.com/site/assets/cms/images/cache/maite-onate-AXWyDjC_Y3U-unsplash_w800.jpg",
    alt: "Light beige linen fabric close-up"
  },
  {
    name: "Reclaimed Wood",
    type: "Wall Paneling",
    image: "https://centennialwoods.com/cdn/shop/products/reclaimed-wood-planks-cody-finish_1020x.progressive.jpg?v=1715379671",
    alt: "Rustic reclaimed wood wall with visible wear"
  },
  {
    name: "Terracotta Tile",
    type: "Floor Tile",
    image: "https://rusticotile.com/wp-content/uploads/2018/09/antique_terracotta_grout.jpg",
    alt: "Reddish-brown terracotta tiles with natural texture"
  }
];

export default function MaterialCatalog() {
  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>🧱 Material Catalog</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {materials.map((mat, index) => (
          <a
            key={index}
            href={`https://www.google.com/search?q=buy+${encodeURIComponent(mat.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: '0.3s',
              cursor: 'pointer',
              display: 'block'
            }}
          >
            <img
              src={mat.image}
              alt={mat.alt}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                transition: '0.3s ease-in-out',
              }}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x150.png?text=Image+Unavailable';
              }}
            />
            <div style={{ padding: '12px' }}>
              <h4 style={{ marginBottom: '5px' }}>{mat.name}</h4>
              <p style={{ fontSize: '14px', color: '#666' }}>{mat.type}</p>
              <p style={{ fontSize: '12px', color: '#888' }}>Click to explore prices</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}







