import React, { useState } from 'react';
import { Mail, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // Importe a biblioteca do EmailJS

function Contato() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  // Estado para controlar a mensagem de status (sucesso, erro, enviando...)
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  // A função que lida com a mudança nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // A função que lida com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Enviando...');

    // As suas chaves do EmailJS
    // Você precisa configurar um serviço, template e obter sua public key no site do EmailJS
    const serviceId = 'seu_service_id';
    const templateId = 'seu_template_id';
    const publicKey = 'sua_public_key';

    // O templateParams são os dados que serão enviados ao seu template do EmailJS
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      to_name: 'Laura', // Seu nome
      subject: formData.assunto,
      message: formData.mensagem,
    };

    // Aqui usamos a função de envio do EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      })
      .catch((err) => {
        console.error('Ocorreu um erro ao enviar o e-mail:', err);
        setStatus('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="bg-neutral-800 min-h-screen flex items-center justify-center font-inter pt-38 pb-16">
      {/* Container principal para o formulário */}
      <div className="relative z-10 w-full max-w-2xl p-8 space-y-8 bg-neutral-900 rounded-xl shadow-2xl backdrop-filter backdrop-blur-sm bg-opacity-70">
        
        {/* Link para voltar à página inicial */}
        <div className="mb-8">
          <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para a Home
          </Link>
        </div>
        
        {/* Título da página */}
        <div className="text-center">
          <Mail size={48} className="mx-auto text-purple-400" />
          <h1 className="mt-4 text-4xl font-extrabold text-white">
            Entre em Contato
          </h1>
          <p className="mt-2 text-sm text-neutral-300">
            Preencha o formulário abaixo para me enviar uma mensagem.
          </p>
        </div>
        
        {/* O formulário de contato */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-neutral-400">
              Seu Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white placeholder-neutral-400 focus:ring-purple-500 focus:border-purple-500 shadow-sm sm:text-sm p-3"
              placeholder="Ex: João Silva"
            />
          </div>
          
          {/* Campo de E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-400">
              Seu E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white placeholder-neutral-400 focus:ring-purple-500 focus:border-purple-500 shadow-sm sm:text-sm p-3"
              placeholder="Ex: joao.silva@email.com"
            />
          </div>
          
          {/* Campo de Assunto */}
          <div>
            <label htmlFor="assunto" className="block text-sm font-medium text-neutral-400">
              Assunto
            </label>
            <input
              id="assunto"
              name="assunto"
              type="text"
              required
              value={formData.assunto}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white placeholder-neutral-400 focus:ring-purple-500 focus:border-purple-500 shadow-sm sm:text-sm p-3"
              placeholder="Ex: Proposta de Vaga de Estágio"
            />
          </div>
          
          {/* Campo de Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-neutral-400">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              required
              value={formData.mensagem}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-neutral-600 bg-neutral-700 text-white placeholder-neutral-400 focus:ring-purple-500 focus:border-purple-500 shadow-sm sm:text-sm p-3"
              placeholder="Escreva sua mensagem aqui..."
            />
          </div>
          
          {/* Botão de Envio */}
          <div>
            <button
              type="submit"
              disabled={isSending}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <Send size={20} className="mr-2" />
              {isSending ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>
        
        {/* Mensagem de status */}
        {status && (
          <p className={`mt-4 text-center text-sm font-medium ${status.includes('sucesso') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contato;
