import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItem, updateItem } from '../utils/database';

function CatalogItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({ name: '', price: '' });

  useEffect(() => {
    loadItem();
  }, [id]);

  const loadItem = async () => {
    const fetchedItem = await fetchItem(id);
    setItem(fetchedItem);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateItem(id, item);
    navigate('/');
  };

  return (
    <div className="catalog-item">
      <h2>Edit Item</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Item Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default CatalogItem;