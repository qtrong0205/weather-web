# 🌤️ Weather Web App

Một ứng dụng web nhỏ giúp hiển thị thông tin thời tiết của các thành phố trên thế giới.  
Dự án được xây dựng để thực hành **React + TypeScript** và cách làm việc với **API thời tiết thực tế**.

---

## 🚀 Tính năng chính

- Tìm kiếm thời tiết theo tên thành phố.  
- Hiển thị các thông tin:
  - Nhiệt độ hiện tại (°C)
  - Dự báo thời tiết 7 ngày kế tiếp
  - Độ ẩm, áp suất, tầm nhìn, tốc độ gió
  - Xác suất mưa theo giờ (Rain Probability Chart)  
- Giao diện tối giản, hiện đại, thân thiện với người dùng.  
- Tự động cập nhật dữ liệu mỗi khi tìm kiếm địa điểm mới.  

---

## 🧩 Công nghệ sử dụng

- ⚛️ **React + TypeScript**
- 💅 **Tailwind CSS**
- 📊 **Recharts** – hiển thị biểu đồ xác suất mưa  
- 🌍 **Open-Meteo API** – lấy dữ liệu thời tiết theo tọa độ
- ☁️ **Vercel** – deploy và quản lý môi trường

---

## ⚙️ Cấu trúc thư mục

```
src/
 ├─ components/      # Các component giao diện chính
 ├─ helper/          # Hàm xử lý dữ liệu, API call
 ├─ layout/          # Layout chung cho toàn app
 ├─ assets/          # Ảnh, icon...
 └─ App.tsx          # Điểm khởi đầu ứng dụng
```

## 🧠 Mục tiêu học tập

Dự án này được tạo ra với mục tiêu:
- Hiểu cách gọi và xử lý **API** trong React.  
- Thực hành **state management cơ bản (useState, useEffect)**.  
- Làm quen với **môi trường build & deploy thực tế trên Vercel**.  
- Làm quen với việc kết hợp giữa **React và Tailwind**
- Làm bước đệm cho các dự án front-end lớn hơn sau này.  

---

## 🔑 Biến môi trường

Tạo file `.env` ở thư mục gốc và thêm các biến sau:
```

VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_FORECAST_API_KEY=your_open_meteo_api_key

````

> ⚠️ Khi deploy, thêm key này vào phần **Environment Variables** trên Vercel để bảo mật.

---

## 🖥️ Chạy project

```bash
# Cài đặt dependencies
npm install

# Chạy ở môi trường dev
npm run dev

# Build production
npm run build
````

---

---

## 🌐 Demo

🔗 [Xem bản deploy trên Vercel](https://weather-web-eight-xi.vercel.app/)

---

## 👨‍💻 Tác giả

Dự án được thực hiện bởi **Quốc Trọng**

> “Một project nhỏ để học, nhưng lại là bước khởi đầu cho những thứ lớn hơn.” 🌱

---