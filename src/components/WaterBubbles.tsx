const bubbles = [
  { size: 8,  left: "5%",  duration: "7s",  delay: "0s",   drift: "10px"  },
  { size: 14, left: "10%", duration: "10s", delay: "1.5s", drift: "-14px" },
  { size: 6,  left: "18%", duration: "6s",  delay: "3s",   drift: "8px"   },
  { size: 20, left: "25%", duration: "12s", delay: "0.8s", drift: "-18px" },
  { size: 10, left: "33%", duration: "9s",  delay: "2.2s", drift: "12px"  },
  { size: 5,  left: "42%", duration: "6.5s",delay: "4s",   drift: "-6px"  },
  { size: 16, left: "50%", duration: "11s", delay: "1s",   drift: "16px"  },
  { size: 7,  left: "58%", duration: "7.5s",delay: "3.5s", drift: "-10px" },
  { size: 22, left: "65%", duration: "13s", delay: "0.3s", drift: "20px"  },
  { size: 9,  left: "72%", duration: "8s",  delay: "2.8s", drift: "-8px"  },
  { size: 12, left: "80%", duration: "9.5s",delay: "1.8s", drift: "14px"  },
  { size: 6,  left: "87%", duration: "6s",  delay: "5s",   drift: "-7px"  },
  { size: 18, left: "93%", duration: "12s", delay: "0.5s", drift: "16px"  },
  { size: 8,  left: "15%", duration: "8.5s",delay: "6s",   drift: "9px"   },
  { size: 11, left: "47%", duration: "10s", delay: "4.5s", drift: "-12px" },
  { size: 4,  left: "70%", duration: "5.5s",delay: "2s",   drift: "5px"   },
  { size: 15, left: "38%", duration: "11s", delay: "7s",   drift: "-15px" },
  { size: 7,  left: "55%", duration: "7s",  delay: "3.2s", drift: "8px"   },
];

export function WaterBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            "--duration": b.duration,
            "--delay": b.delay,
            "--drift": b.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
