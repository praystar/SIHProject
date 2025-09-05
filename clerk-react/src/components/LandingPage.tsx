import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

const LandingPage: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)',
      minHeight: '100vh',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Left Section - Text */}
      <div style={{
        flex: '0 0 30%',
        background: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        position: 'relative'
      }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#1a237e',
          textAlign: 'center',
          lineHeight: 1,
          marginBottom: '40px',
          letterSpacing: '2px'
        }}>
          <div>STOP</div>
          <div>OCEAN</div>
          <div>PLASTIC</div>
          <div>POLLUTION</div>
        </div>
        
        {/* Fish swimming towards right */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px'
        }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '20px',
                height: '15px',
                background: '#ff6b35',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transform: `translateX(${i * 5}px)`,
                animation: `swim 2s ease-in-out infinite ${i * 0.1}s`
              }}
            />
          ))}
        </div>

        <SignInButton mode="modal">
          <button style={{
            background: '#1a237e',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '20px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.4)';
            e.currentTarget.style.background = '#0d47a1';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
            e.currentTarget.style.background = '#1a237e';
          }}
          >
            Login
          </button>
        </SignInButton>
      </div>

      {/* Right Section - Ocean Scene */}
      <div style={{
        flex: '0 0 70%',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(180deg, #4fc3f7 0%, #29b6f6 20%, #1976d2 40%, #0d47a1 60%, #0a3d91 80%, #0c1445 100%)',
        overflow: 'hidden'
      }}>
        {/* Ocean layers */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(79, 195, 247, 0.3) 0%, rgba(41, 182, 246, 0.4) 20%, rgba(25, 118, 210, 0.5) 40%, rgba(13, 71, 161, 0.6) 60%, rgba(10, 61, 145, 0.7) 80%, rgba(12, 20, 69, 0.8) 100%)'
        }} />

        {/* Marine Life */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '30px',
          height: '20px',
          background: '#ff6b9d',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          animation: 'swim 3s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '25px',
          height: '18px',
          background: '#ffd54f',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          animation: 'swim 2.5s ease-in-out infinite 0.5s'
        }} />

        <div style={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          width: '22px',
          height: '16px',
          background: '#81c784',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          animation: 'swim 2.8s ease-in-out infinite 1s'
        }} />

        {/* Coral formations */}
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '40px',
          height: '60px',
          background: 'linear-gradient(45deg, #ff6b9d, #ff8a80)',
          borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
          transform: 'rotate(-15deg)'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '35px',
          height: '50px',
          background: 'linear-gradient(45deg, #81c784, #a5d6a7)',
          borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
          transform: 'rotate(20deg)'
        }} />

        {/* Seaweed */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '8px',
          height: '80px',
          background: 'linear-gradient(180deg, #4caf50, #66bb6a)',
          borderRadius: '4px',
          transform: 'rotate(-5deg)'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '5%',
          right: '25%',
          width: '6px',
          height: '70px',
          background: 'linear-gradient(180deg, #8bc34a, #aed581)',
          borderRadius: '3px',
          transform: 'rotate(8deg)'
        }} />

        {/* Plastic Pollution */}
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: '30px',
          height: '50px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '5px',
          transform: 'rotate(15deg)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }} />

        <div style={{
          position: 'absolute',
          top: '35%',
          right: '30%',
          width: '25px',
          height: '40px',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '3px',
          transform: 'rotate(-10deg)',
          boxShadow: '0 3px 6px rgba(0,0,0,0.2)'
        }} />

        <div style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          width: '20px',
          height: '35px',
          background: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '2px',
          transform: 'rotate(25deg)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }} />

        {/* Plastic bags */}
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '40%',
          width: '35px',
          height: '45px',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '8px',
          transform: 'rotate(-20deg)',
          boxShadow: '0 5px 10px rgba(0,0,0,0.3)'
        }} />

        <div style={{
          position: 'absolute',
          top: '60%',
          right: '35%',
          width: '28px',
          height: '38px',
          background: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '6px',
          transform: 'rotate(30deg)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }} />

        {/* Microplastics (small white circles) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${20 + (i * 5)}%`,
              left: `${60 + (i * 2)}%`,
              width: '4px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              animation: `float 3s ease-in-out infinite ${i * 0.2}s`
            }}
          />
        ))}

        {/* Plastic fork and spoon */}
        <div style={{
          position: 'absolute',
          top: '45%',
          right: '50%',
          width: '15px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '1px',
          transform: 'rotate(45deg)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }} />

        <div style={{
          position: 'absolute',
          top: '48%',
          right: '52%',
          width: '12px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '1px',
          transform: 'rotate(-30deg)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }} />
      </div>

      <style>{`
        @keyframes swim {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(20px) translateY(0px); }
          75% { transform: translateX(10px) translateY(5px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
