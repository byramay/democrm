import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown, Plus, Calendar, Bell, Settings, Menu } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Bar Chart Data
  const barChartData = [
    { month: 'Ara', Gelir: 300, Gider: 200 },
    { month: 'Oca', Gelir: 200, Gider: 150 },
    { month: 'Şub', Gelir: 280, Gider: 180 },
    { month: 'Mar', Gelir: 400, Gider: 250 },
    { month: 'Nis', Gelir: 350, Gider: 220 },
    { month: 'May', Gelir: 450, Gider: 280 },
  ];

  // Proje Durumları Data
  const projectStatusData = [
    { name: 'Devam Eden', value: 12, color: '#7C3AED' },
    { name: 'Planlama', value: 6, color: '#F97316' },
    { name: 'Beklemede', value: 4, color: '#3B82F6' },
    { name: 'Tamamlandı', value: 2, color: '#10B981' },
  ];

  // KPI Cards
  const kpiCards = [
    { title: 'Toplam Müşteri', value: '1.248', change: '+12.5%', icon: '👥' },
    { title: 'Aktif Projeler', value: '24', change: '+14.3%', icon: '📁' },
    { title: 'Bekleyen Siparişler', value: '12', change: '-7.1%', icon: '🛒' },
    { title: 'Bekleyen Ödemeler', value: '₺ 125.430', change: '-3.8%', icon: '💰' },
    { title: 'Tamamlanan Görevler', value: '85', change: '+18.7%', icon: '✅' },
    { title: 'Devam Eden Görevler', value: '27', change: '0.0%', icon: '⏳' },
    { title: 'Bu Ay Toplam Gelir', value: '₺ 340.680', change: '+22.4%', icon: '📈' },
  ];

  // Bekleyen Ödemeler Table
  const pendingPayments = [
    { company: 'ABC Ltd. Şti.', date: '15.05.2025', amount: '₺ 25.000' },
    { company: 'XYZ Yazılım', date: '16.05.2025', amount: '₺ 18.750' },
    { company: 'DEF İnşaat', date: '20.05.2025', amount: '₺ 32.400' },
    { company: 'GHI Teknoloji', date: '22.05.2025', amount: '₺ 14.280' },
    { company: 'JKL Danışmanlık', date: '25.05.2025', amount: '₺ 34.000' },
  ];

  // Aktif Projeler Table
  const activeProjects = [
    { name: 'Web Sitesi Yenileme', company: 'ABC Ltd. Şti.', status: '65', percentage: 65 },
    { name: 'Mobil Uygulama', company: 'XYZ Yazılım', status: '40', percentage: 40 },
    { name: 'ERP Entegrasyonu', company: 'DEF İnşaat', status: '80', percentage: 80 },
    { name: 'E-Ticaret Platformu', company: 'GHI Teknoloji', status: '30', percentage: 30 },
    { name: 'CRM Modülü', company: 'JKL Danışmanlık', status: '55', percentage: 55 },
  ];

  // Son Görevler Table
  const recentTasks = [
    { task: 'Tekif Sunumu Hazırla', assignee: 'Mehmet Yılmaz', date: '15.05.2025' },
    { task: 'Müşteri Toplantısı', assignee: 'Ayşe Demir', date: '16.05.2025' },
    { task: 'Rapor Hazırlama', assignee: 'Ahmet Kaya', date: '17.05.2025' },
    { task: 'Sistem Testi', assignee: 'Fatma Şahin', date: '18.05.2025' },
    { task: 'Dokümantasyon', assignee: 'Mehmet Yılmaz', date: '19.05.2025' },
  ];

  // Son Aktiviteler
  const recentActivities = [
    { user: 'Mehmet Yılmaz', action: 'yeni bir sipariş oluşturdu.', time: '5 dakika önce' },
    { user: 'Ayşe Demir', action: 'proje güncelledi.', time: '15 dakika önce' },
    { user: 'Ahmet Kaya', action: 'yeni görev atandı.', time: '30 dakika önce' },
    { user: 'Fatma Şahin', action: 'tekif onayladı.', time: '1 saat önce' },
    { user: 'Mehmet Yılmaz', action: 'ödeme kaydı ekledi.', time: '2 saat önce' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-purple-600 to-purple-700 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center gap-2 ${!sidebarOpen && 'justify-center'}`}>
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">E</span>
            </div>
            {sidebarOpen && (
              <div>
                <p className="font-bold">ERP CRM</p>
                <p className="text-xs text-purple-200">v1.0.0</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-8 space-y-2 px-2">
          {sidebarOpen && <p className="text-xs font-semibold text-purple-300 px-2 mt-4">SATIŞ YÖNETİMİ</p>}
          <NavItem icon="📊" label="Dashboard" active={true} badge="" sidebarOpen={sidebarOpen} />
          <NavItem icon="🛍️" label="Siparişler" badge="12" sidebarOpen={sidebarOpen} />
          <NavItem icon="📋" label="Teklifler" badge="8" sidebarOpen={sidebarOpen} />
          <NavItem icon="👥" label="Müşteriler" badge="" sidebarOpen={sidebarOpen} />
          <NavItem icon="📦" label="Ürünler" badge="" sidebarOpen={sidebarOpen} />

          {sidebarOpen && <p className="text-xs font-semibold text-purple-300 px-2 mt-4">PROJE YÖNETİMİ</p>}
          <NavItem icon="📁" label="Projeler" sidebarOpen={sidebarOpen} />
          <NavItem icon="👁️" label="Görevler" sidebarOpen={sidebarOpen} />
          <NavItem icon="✅" label="Takviim" sidebarOpen={sidebarOpen} />

          {sidebarOpen && <p className="text-xs font-semibold text-purple-300 px-2 mt-4">FİNANS YÖNETİMİ</p>}
          <NavItem icon="💵" label="Gelirler" sidebarOpen={sidebarOpen} />
          <NavItem icon="💸" label="Giderler" sidebarOpen={sidebarOpen} />
          <NavItem icon="📊" label="Tahsilatlər" sidebarOpen={sidebarOpen} />
          <NavItem icon="📈" label="Ödemeler" sidebarOpen={sidebarOpen} />

          {sidebarOpen && <p className="text-xs font-semibold text-purple-300 px-2 mt-4">STOK YÖNETİMİ</p>}
          <NavItem icon="📦" label="Stoklar" sidebarOpen={sidebarOpen} />
          <NavItem icon="⬇️" label="Depolar" sidebarOpen={sidebarOpen} />
          <NavItem icon="🏷️" label="Stok Hareketleri" sidebarOpen={sidebarOpen} />

          {sidebarOpen && <p className="text-xs font-semibold text-purple-300 px-2 mt-4">DİĞER</p>}
          <NavItem icon="📄" label="Dosyalar" sidebarOpen={sidebarOpen} />
          <NavItem icon="📊" label="Raporlar" sidebarOpen={sidebarOpen} />
          <NavItem icon="⚙️" label="Aktiviteler" sidebarOpen={sidebarOpen} />
          <NavItem icon="🔗" label="Ayarlar" sidebarOpen={sidebarOpen} />
          <NavItem icon="👥" label="Kullanıcılar" sidebarOpen={sidebarOpen} />
          <NavItem icon="⚡" label="Roller ve Yetkileri" sidebarOpen={sidebarOpen} />
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-4 left-2 right-2 border-t border-purple-500 pt-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">Y</div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-semibold">Yönetici</p>
                <p className="text-xs text-purple-200">admin@erp.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
            <div className="flex-1 max-w-xs">
              <input type="text" placeholder="Arama yapın..." className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700">
              <Plus size={20} /> Yeni İşlem
            </button>
            <button className="relative text-gray-600 hover:text-gray-900">
              <Calendar size={20} />
            </button>
            <button className="relative text-gray-600 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Settings size={20} />
            </button>
            <select className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700 cursor-pointer">
              <option>Demo Şirket A.Ş</option>
            </select>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-8">
          {/* Breadcrumb & Title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Ana Sayfa</span>
                <span>/</span>
                <span>Dashboard</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">01.05.2025 - 14.05.2025</span>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <ChevronDown size={16} className="inline mr-2" /> Widget Ayarları
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpiCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  </div>
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <p className={`text-sm mt-2 ${card.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change} Geçen aya göre
                </p>
              </div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Bar Chart */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Aylık Gelir / Gider</h2>
                <select className="text-sm border-none bg-transparent text-purple-600 font-semibold cursor-pointer">
                  <option>6 Ay</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Gelir" fill="#7C3AED" />
                  <Bar dataKey="Gider" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Proje Durumları */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Proje Durumları</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={projectStatusData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {projectStatusData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-700">{item.name}</span>
                    <span className="ml-auto font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Bekleyen Ödemeler */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Bekleyen Ödemeler</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Müşteri</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Vade Tarihi</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Tutar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingPayments.map((payment, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{payment.company}</td>
                        <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                        <td className="py-3 px-4 text-red-600 font-semibold">{payment.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Aktif Projeler */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Aktif Projeler</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Proje Adı</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Müşteri</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">İlerleme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeProjects.map((project, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-medium">{project.name}</td>
                        <td className="py-3 px-4 text-gray-600">{project.company}</td>
                        <td className="py-3 px-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${project.percentage}%` }}></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Son Görevler */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Son Görevler</h2>
              <div className="space-y-3">
                {recentTasks.map((task, index) => (
                  <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                    <p className="font-medium text-gray-900 text-sm">{task.task}</p>
                    <p className="text-xs text-gray-600 mt-1">{task.assignee} - {task.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Son Aktiviteler */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Son Aktiviteler</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// NavItem Component
const NavItem = ({ icon, label, active = false, badge = '', sidebarOpen }: any) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
    active ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
  }`}>
    <span className="text-lg">{icon}</span>
    {sidebarOpen && (
      <>
        <span className="flex-1 text-sm">{label}</span>
        {badge && <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">{badge}</span>}
      </>
    )}
  </div>
);

export default Dashboard;