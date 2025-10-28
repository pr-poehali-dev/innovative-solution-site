import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [animatedBalance, setAnimatedBalance] = useState(0);
  const [animatedInvestment, setAnimatedInvestment] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const balanceTimer = setInterval(() => {
      setAnimatedBalance(prev => {
        if (prev < 124500) return Math.min(prev + 2500, 124500);
        return prev;
      });
    }, 20);
    
    const investmentTimer = setInterval(() => {
      setAnimatedInvestment(prev => {
        if (prev < 45800) return Math.min(prev + 1000, 45800);
        return prev;
      });
    }, 20);

    return () => {
      clearInterval(balanceTimer);
      clearInterval(investmentTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const financialData = {
    totalBalance: 124500,
    monthlyIncome: 15200,
    monthlyExpenses: 8750,
    investmentValue: 45800,
    investmentGrowth: 12.4,
  };

  const categories = [
    { name: 'Жилье', amount: 3200, percentage: 37, color: '#0EA5E9' },
    { name: 'Продукты', amount: 2100, percentage: 24, color: '#8B5CF6' },
    { name: 'Транспорт', amount: 1500, percentage: 17, color: '#D946EF' },
    { name: 'Развлечения', amount: 950, percentage: 11, color: '#F97316' },
    { name: 'Прочее', amount: 1000, percentage: 11, color: '#0EA5E9' },
  ];

  const investments = [
    { name: 'Акции', value: 22400, percentage: 48.9, change: '+15.2%' },
    { name: 'Облигации', value: 13700, percentage: 29.9, change: '+8.1%' },
    { name: 'ETF', value: 9700, percentage: 21.2, change: '+12.7%' },
  ];

  const portfolioChartData = [
    { name: 'Акции', value: 22400, color: '#0EA5E9' },
    { name: 'Облигации', value: 13700, color: '#8B5CF6' },
    { name: 'ETF', value: 9700, color: '#D946EF' },
  ];

  const growthChartData = [
    { month: 'Янв', value: 32000 },
    { month: 'Фев', value: 35200 },
    { month: 'Мар', value: 38500 },
    { month: 'Апр', value: 41200 },
    { month: 'Май', value: 43800 },
    { month: 'Июн', value: 45800 },
  ];

  const cashFlowData = [
    { month: 'Янв', income: 14800, expenses: 8200 },
    { month: 'Фев', income: 15100, expenses: 8600 },
    { month: 'Мар', income: 14900, expenses: 8400 },
    { month: 'Апр', income: 15300, expenses: 8900 },
    { month: 'Май', income: 15000, expenses: 8700 },
    { month: 'Июн', income: 15200, expenses: 8750 },
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: 0,
      features: ['Отслеживание расходов', 'Бюджетирование', 'Простая аналитика', 'Мобильное приложение'],
      popular: false,
    },
    {
      name: 'Премиум',
      price: 990,
      features: ['Всё из Базового', 'Инвестиционный трекер', 'Расширенная аналитика', 'Персональные рекомендации', 'Приоритетная поддержка'],
      popular: true,
    },
    {
      name: 'Бизнес',
      price: 2990,
      features: ['Всё из Премиум', 'Командный доступ', 'API интеграция', 'Индивидуальный консалтинг', 'Белый лейбл'],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" className="text-primary" size={32} />
              <span className="text-2xl font-bold gradient-text">FinFlow</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('solutions')} className="text-sm hover:text-primary transition-colors">Решения</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:text-primary transition-colors">Как работает</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>

            <Button className="hidden md:inline-flex">Начать бесплатно</Button>
            
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Управляй финансами
              <br />
              <span className="gradient-text">умнее</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              ИИ-платформа для контроля личных финансов и инвестиций. Принимай решения на основе данных и достигай финансовых целей быстрее.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Попробовать бесплатно
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Смотреть демо
                <Icon name="Play" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">150K+</div>
                <div className="text-sm text-muted-foreground mt-1">Пользователей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground mt-1">Под управлением</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Мониторинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Умная панель управления</h2>
            <p className="text-xl text-muted-foreground">Все финансы в одном месте</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 glass-effect border-border hover:border-primary transition-all hover:scale-105 duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Общий баланс</p>
                  <h3 className="text-4xl font-bold mt-1">{animatedBalance.toLocaleString('ru-RU')} ₽</h3>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                  <Icon name="Wallet" className="text-primary" size={32} />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Доход</p>
                  <p className="text-lg font-semibold text-green-400">+{financialData.monthlyIncome.toLocaleString('ru-RU')} ₽</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Расход</p>
                  <p className="text-lg font-semibold text-red-400">-{financialData.monthlyExpenses.toLocaleString('ru-RU')} ₽</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 glass-effect border-border hover:border-secondary transition-all hover:scale-105 duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Инвестиции</p>
                  <h3 className="text-4xl font-bold mt-1">{animatedInvestment.toLocaleString('ru-RU')} ₽</h3>
                </div>
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center animate-pulse">
                  <Icon name="TrendingUp" className="text-secondary" size={32} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ArrowUp" className="text-green-400" size={20} />
                <span className="text-lg font-semibold text-green-400">+{financialData.investmentGrowth}%</span>
                <span className="text-sm text-muted-foreground">в этом месяце</span>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 glass-effect border-border hover:border-primary transition-all">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="PieChart" className="text-primary" size={24} />
                Категории расходов
              </h4>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {portfolioChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ background: 'rgba(26, 31, 44, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      formatter={(value: any) => `${value.toLocaleString('ru-RU')} ₽`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{category.amount.toLocaleString('ru-RU')} ₽</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-effect border-border hover:border-secondary transition-all">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" className="text-secondary" size={24} />
                Рост инвестиций
              </h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthChartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ background: 'rgba(26, 31, 44, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      formatter={(value: any) => `${value.toLocaleString('ru-RU')} ₽`}
                    />
                    <Area type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <Card className="p-8 glass-effect border-border hover:border-primary transition-all">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Icon name="BarChart3" className="text-primary" size={24} />
              Денежный поток
            </h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(26, 31, 44, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    formatter={(value: any) => `${value.toLocaleString('ru-RU')} ₽`}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#0EA5E9" strokeWidth={3} name="Доходы" />
                  <Line type="monotone" dataKey="expenses" stroke="#F97316" strokeWidth={3} name="Расходы" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground">Путь к финансовой свободе за 3 шага</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Link',
                title: 'Подключите счета',
                description: 'Безопасно свяжите банковские карты и инвестиционные счета. Данные шифруются по стандарту банковского уровня.',
              },
              {
                icon: 'Brain',
                title: 'ИИ анализирует',
                description: 'Умные алгоритмы изучают ваши паттерны трат и находят возможности для оптимизации бюджета.',
              },
              {
                icon: 'Rocket',
                title: 'Достигайте целей',
                description: 'Получайте персональные рекомендации и автоматические инсайты для роста благосостояния.',
              },
            ].map((step, index) => (
              <Card 
                key={index} 
                className="p-8 glass-effect border-border hover:border-primary transition-all text-center group hover:scale-105 duration-300"
                style={{ 
                  transform: `translateY(${scrollY * 0.05 * (index + 1)}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/40 transition-all group-hover:scale-110">
                  <Icon name={step.icon as any} className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground">Начните бесплатно, обновляйтесь когда будете готовы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 glass-effect border-border hover:border-primary transition-all hover:scale-105 duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
                    ⭐ Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  {plan.price > 0 && <span className="text-muted-foreground ml-2">₽/мес</span>}
                </div>
                <Button className="w-full mb-6 group" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.price === 0 ? 'Начать бесплатно' : 'Выбрать план'}
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">О платформе FinFlow</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Мы создали FinFlow, чтобы сделать управление финансами простым и понятным для каждого. 
            Наша миссия — помочь людям принимать умные финансовые решения с помощью технологий и данных.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <Icon name="Shield" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">Банковский уровень шифрования данных</p>
            </div>
            <div>
              <Icon name="Zap" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Скорость</h3>
              <p className="text-muted-foreground">Мгновенная синхронизация всех счетов</p>
            </div>
            <div>
              <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-muted-foreground">Всегда рядом, когда нужна помощь</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Есть вопросы? Мы всегда готовы помочь</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 glass-effect border-border text-center hover:border-primary transition-all">
              <Icon name="Mail" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">support@finflow.ru</p>
            </Card>
            <Card className="p-6 glass-effect border-border text-center hover:border-primary transition-all">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            <Card className="p-6 glass-effect border-border text-center hover:border-primary transition-all">
              <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-sm text-muted-foreground">@finflow_support</p>
            </Card>
          </div>

          <Card className="p-8 glass-effect border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors" placeholder="ivan@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Расскажите, чем мы можем помочь..."></textarea>
              </div>
              <Button className="w-full md:w-auto px-8">
                Отправить сообщение
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" className="text-primary" size={24} />
              <span className="text-xl font-bold gradient-text">FinFlow</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 FinFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;