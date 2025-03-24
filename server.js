const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// لتفسير JSON في جسم الطلبات
app.use(express.json());

// هنا نخزن الطلبات مؤقتاً (يمكنك استبدال هذا بقاعدة بيانات)
let orders = [];

// نقطة النهاية لاستقبال الطلبات (POST)
app.post('/api/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json({ message: "تم حفظ الطلب بنجاح", order: order });
});

// نقطة النهاية لاسترجاع الطلبات (GET)
app.get('/api/orders', (req, res) => {
  res.json({ orders: orders });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
