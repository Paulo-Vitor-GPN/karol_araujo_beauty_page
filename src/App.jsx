import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageCircle, 
  Star,
  Scissors,
  Sparkles,
  Heart,
  Calendar,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  User,
  Mail
} from 'lucide-react'
import logoKarol from './assets/logo-karol.jpeg'
import salonInterior1 from './assets/salon-interior-1.webp'
import salonInterior2 from './assets/salon-interior-2.jpg'
import salonInterior3 from './assets/salon-interior-3.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home' ou 'agendamento'

  const services = [
    {
      icon: <Scissors className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Depilação",
      description: "Cera tradicional e depilação a laser",
      price: "A partir de R$ 25",
      duration: "15-60 min"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Design de Sobrancelhas",
      description: "Modelagem e micropigmentação",
      price: "A partir de R$ 40",
      duration: "30-90 min"
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Manicure & Pedicure",
      description: "Cuidados completos para unhas",
      price: "A partir de R$ 35",
      duration: "45-90 min"
    }
  ]

  const schedule = [
    { day: "Segunda-feira", hours: "FECHADO" },
    { day: "Terça-feira", hours: "09:00 às 12:00 - 13:00 às 22:00" },
    { day: "Quarta-feira", hours: "09:00 às 11:00 - 13:00 às 23:00" },
    { day: "Quinta-feira", hours: "09:00 às 11:00 - 13:00 às 23:30" },
    { day: "Sexta-feira", hours: "06:00 às 11:00 - 13:00 às 23:30" },
    { day: "Sábado", hours: "06:00 às 13:00 - 13:10 às 18:00" },
    { day: "Domingo", hours: "FECHADO" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Atendimento excepcional! A Karol é muito profissional e o ambiente é acolhedor."
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Melhor design de sobrancelha da região. Super recomendo!"
    },
    {
      name: "Juliana Santos",
      rating: 5,
      comment: "Sempre saio de lá me sentindo renovada. Excelente trabalho!"
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const openAgendamento = () => {
    setCurrentPage('agendamento')
    setIsMenuOpen(false)
  }

  const backToHome = () => {
    setCurrentPage('home')
  }

  // Página de Agendamento
  if (currentPage === 'agendamento') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
        {/* Header da página de agendamento */}
        <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={backToHome}
                className="flex items-center space-x-2 text-gray-700 hover:text-amber-600"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Voltar</span>
              </Button>
              
              <div className="flex items-center space-x-3">
                <img src={logoKarol} alt="Karol Araújo Beauty" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-800">Agendamento</h1>
                  <p className="text-xs sm:text-sm text-amber-600 font-medium">KAROL ARAÚJO BEAUTY</p>
                </div>
              </div>
              
              <div className="w-16"></div> {/* Spacer para centralizar */}
            </div>
          </div>
        </header>

        {/* Conteúdo da página de agendamento */}
        <div className="container mx-auto px-4 py-6 sm:py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Agende seu Horário</h2>
              <p className="text-gray-600 text-sm sm:text-base">Escolha o serviço desejado e preencha seus dados para agendamento</p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4 sm:p-8">
                <form className="space-y-6">
                  {/* Seleção de Serviço */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Selecione o Serviço</label>
                    <div className="grid gap-3">
                      {services.map((service, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-all cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <input type="radio" name="service" id={`service-${index}`} className="text-amber-600" />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                {service.icon}
                                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{service.title}</h3>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2">{service.description}</p>
                              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
                                <span className="font-semibold text-amber-600">{service.price}</span>
                                <span className="text-gray-500">{service.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dados Pessoais */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="text" 
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="tel" 
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail (opcional)</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="email" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Data e Horário */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Data Preferida</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Horário Preferido</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base">
                        <option>Manhã (09:00 - 12:00)</option>
                        <option>Tarde (13:00 - 18:00)</option>
                        <option>Noite (18:00 - 23:00)</option>
                      </select>
                    </div>
                  </div>

                  {/* Observações */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Observações (opcional)</label>
                    <textarea 
                      rows="3" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-sm sm:text-base"
                      placeholder="Alguma observação especial ou preferência..."
                    ></textarea>
                  </div>

                  {/* Botões */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      type="button"
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl text-sm sm:text-base"
                      onClick={() => alert('Agendamento enviado! Entraremos em contato via WhatsApp.')}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirmar Agendamento
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50 py-3 rounded-xl text-sm sm:text-base"
                      onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Direto
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Horários de Funcionamento */}
            <Card className="mt-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-gray-800 text-lg">
                  <Clock className="w-5 h-5 mr-2 text-amber-600" />
                  Horários de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1 text-sm">
                      <span className="font-medium text-gray-700">{item.day}</span>
                      <span className={`${item.hours === 'FECHADO' ? 'text-red-600' : 'text-gray-600'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Página Principal (Home)
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src={logoKarol} alt="Karol Araújo Beauty" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-800">Karol Araújo</h1>
                <p className="text-xs sm:text-sm text-amber-600 font-medium">BEAUTY</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors text-sm lg:text-base">Início</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors text-sm lg:text-base">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors text-sm lg:text-base">Serviços</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors text-sm lg:text-base">Galeria</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors text-sm lg:text-base">Contato</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2">Início</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2">Sobre</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2">Serviços</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2">Galeria</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2">Contato</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 text-xs sm:text-sm">
                  ✨ Espaço de Beleza Premium
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                  Realce sua
                  <span className="text-amber-600 block">Beleza Natural</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 lg:mt-6 leading-relaxed">
                  No Karol Araújo Beauty, cada detalhe é pensado para proporcionar uma experiência única de cuidado e bem-estar. Descubra o melhor de você com nossos serviços especializados.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                  onClick={openAgendamento}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Agendar Horário
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"
                  onClick={() => scrollToSection('services')}
                >
                  Ver Serviços
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">+200 clientes satisfeitas</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">5.0 avaliação</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <img 
                  src={salonInterior1} 
                  alt="Espaço Karol Araújo Beauty" 
                  className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-amber-200 to-rose-200 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <Badge className="mb-4 bg-rose-100 text-rose-800 text-xs sm:text-sm">Sobre Nós</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                  Paixão pela Beleza e Bem-Estar
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                  Sou Karol Araújo, profissional especializada em beleza e estética com anos de experiência no mercado. Minha missão é realçar a beleza natural de cada cliente, proporcionando um atendimento personalizado e de qualidade.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  No meu espaço, você encontra um ambiente acolhedor e profissional, equipado com as melhores tecnologias e produtos do mercado. Cada procedimento é realizado com cuidado e atenção aos detalhes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 bg-amber-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-rose-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-rose-600">200+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Clientes Satisfeitas</div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img 
                src={salonInterior2} 
                alt="Karol Araújo" 
                className="rounded-3xl shadow-xl w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 text-xs sm:text-sm">Nossos Serviços</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Serviços Especializados
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de beleza, sempre com produtos de qualidade e técnicas atualizadas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 sm:p-4 bg-amber-50 rounded-full w-fit group-hover:bg-amber-100 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-6">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">{service.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{service.duration}</div>
                  </div>
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full text-sm sm:text-base"
                    onClick={openAgendamento}
                  >
                    Agendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-800 text-xs sm:text-sm">Galeria</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Nosso Espaço
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nosso ambiente acolhedor e moderno, pensado para proporcionar conforto e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2">
              <img 
                src={salonInterior1} 
                alt="Interior do salão" 
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div>
              <img 
                src={salonInterior2} 
                alt="Área de atendimento" 
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div>
              <img 
                src={salonInterior3} 
                alt="Recepção" 
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="lg:col-span-2">
              <img 
                src={salonInterior2} 
                alt="Ambiente relaxante" 
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 text-xs sm:text-sm">Depoimentos</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              O que nossas clientes dizem
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic text-sm sm:text-base">"{testimonial.comment}"</p>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-800 text-xs sm:text-sm">Contato</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                Entre em Contato
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 lg:mb-8">
                Estamos prontas para atendê-la! Entre em contato para agendar seu horário ou tirar dúvidas.
              </p>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">WhatsApp</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Atendimento rápido e personalizado</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rose-100 rounded-full">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">@karaujo_beauty</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Acompanhe nossos trabalhos</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">Localização</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Endereço disponível via WhatsApp</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 rounded-full text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  className="border-rose-600 text-rose-600 hover:bg-rose-50 px-4 sm:px-6 py-3 rounded-full text-sm sm:text-base"
                  onClick={() => window.open('https://instagram.com/karaujo_beauty', '_blank')}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-amber-50 to-rose-50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800 text-lg sm:text-xl">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-600" />
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">{item.day}</span>
                        <span className={`text-xs sm:text-sm ${item.hours === 'FECHADO' ? 'text-red-600' : 'text-gray-600'}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <Button 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full text-sm sm:text-base"
                      onClick={openAgendamento}
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Agendar Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoKarol} alt="Karol Araújo Beauty" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Karol Araújo</h3>
                  <p className="text-amber-400 text-xs sm:text-sm">BEAUTY</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Espaço de beleza dedicado a realçar sua beleza natural com profissionalismo e carinho.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Início</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Sobre</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Serviços</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Contato</button>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p>WhatsApp: Disponível via site</p>
                <p>Instagram: @karaujo_beauty</p>
                <p>Horário: Ter-Sáb (veja horários completos)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2024 Karol Araújo Beauty. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

