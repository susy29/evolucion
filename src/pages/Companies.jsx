import { Plus } from "lucide-react";

import movistarLogo from "../images/movistar.png";
import baitLogo from "../images/bait.png";
import attLogo from "../images/at&t.png";
import unefonLogo from "../images/unefon.png";
import esimLogo from "../images/esim.png";
import companias from "../images/compañias.jpg";

const companies = [
    {
        name: "AT&T",
        logo: attLogo,
        bg: "#fefeff",
        width: "85px",
        height: "65px",
        scale: 1.7,
    },
    {
        name: "Movistar",
        logo: movistarLogo,
        bg: "#fefeff",
        width: "80px",
        height: "65px",
        scale: 1.5,
    },
    {
        name: "Unefon",
        logo: unefonLogo,
        bg: "#fefeff",
        width: "80px",
        height: "65px",
        scale: 1.5,
    },
    {
        name: "BAIT",
        logo: baitLogo,
        bg: "#fefeff",
        width: "80px",
        height: "65px",
        scale: 1.5,
    },
    {
        name: "E-SIM",
        logo: esimLogo,
        bg: "#fefeff",
        width: "85px",
        height: "65px",
        scale: 1.7,
    },
];

function CompanyCard({ company }) {
    return (
        <button
            type="button"
            className="company-card"
            style={{ background: company.bg }}
            aria-label={`Seleccionar ${company.name}`}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <img
                src={company.logo}
                alt={company.name}
                style={{
                    width: company.width,
                    height: company.height,
                    objectFit: "contain",
                    transform: `scale(${company.scale})`,
                }}
            />
        </button>
    );
}

export default function Companies() {
    return (
        <main className="companies-page">

            {/* HERO */}
            <section className="companies-hero">

                <div className="companies-hero-image">
                    <img
                        src={companias}
                        alt="Compañías telefónicas"
                    />
                </div>

                <div className="companies-hero-overlay" />

                <div className="companies-hero-content">

                    <span className="companies-label">
                        NUESTRAS COMPAÑÍAS
                    </span>

                    <h1>
                        Encuentra la compañía
                        <br className="desktop-break" />
                        que necesitas
                    </h1>

                    <p>
                        Te brindamos opciones de las principales compañías
                        telefónicas para que siempre encuentres la conexión
                        que mejor se adapta a ti.
                    </p>

                </div>

            </section>

            {/* COMPAÑÍAS */}
            <section className="companies-section">

                <div className="companies-box">

                    <div className="companies-grid">

                        <div className="companies-intro">

                            <span className="mexico-label">
                                ◉ EN MÉXICO
                            </span>

                            <h2>
                                Opciones de las principales compañías en un
                                solo lugar.
                            </h2>

                        </div>

                        {companies.map((company) => (
                            <CompanyCard
                                key={company.name}
                                company={company}
                            />
                        ))}

                        <button
                            type="button"
                            className="more-card"
                            aria-label="Ver más opciones de compañías"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-4px)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(0,0,0,.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <Plus size={25} strokeWidth={1.7} />

                            <span>
                                Más
                                <br />
                                opciones
                            </span>
                        </button>

                    </div>

                </div>

            </section>

            <style>{`

                .companies-page {
                    width: 100%;
                    overflow-x: hidden;
                    background: #ffffff;
                }

                /* =========================
                   HERO
                ========================== */

                .companies-hero {
                    position: relative;
                    width: 100%;
                    min-height: 540px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    background: #112B40;
                }

                .companies-hero-image {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .companies-hero-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                }

                .companies-hero-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;

                    background:
                        linear-gradient(
                            90deg,
                            rgba(6,29,50,.97) 0%,
                            rgba(8,42,71,.88) 38%,
                            rgba(8,42,71,.48) 65%,
                            rgba(8,42,71,.12) 100%
                        );
                }

                .companies-hero-content {
                    position: relative;
                    z-index: 2;

                    width: 100%;
                    max-width: 1180px;

                    margin: 0 auto;

                    padding: 90px 20px 130px;

                    color: #ffffff;
                }

                .companies-label {
                    display: inline-flex;
                    align-items: center;

                    padding: 10px 18px;

                    border-radius: 30px;

                    background: rgba(255,255,255,.12);
                    border: 1px solid rgba(255,255,255,.2);

                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1px;

                    backdrop-filter: blur(6px);
                }

                .companies-hero h1 {
                    max-width: 700px;

                    margin: 25px 0 15px;

                    font-size: clamp(38px, 5vw, 65px);
                    line-height: 1.05;

                    font-weight: 900;

                    letter-spacing: -1.5px;
                }

                .companies-hero p {
                    max-width: 600px;

                    margin: 0;

                    color: #d6e3eb;

                    font-size: 18px;
                    line-height: 1.7;
                }

                /* =========================
                   SECCIÓN
                ========================== */

                .companies-section {
                    width: 100%;
                    max-width: 1180px;

                    margin: -65px auto 0;

                    padding: 0 20px 80px;

                    position: relative;
                    z-index: 3;
                }

                .companies-box {
                    width: 100%;

                    background: #F8F8F8;

                    border-radius: 30px;

                    padding: 28px;

                    box-shadow:
                        0 20px 50px rgba(0,0,0,.12);
                }

                .companies-grid {
                    display: grid;

                    grid-template-columns:
                        minmax(230px, 1.7fr)
                        repeat(6, minmax(80px, 1fr));

                    align-items: center;

                    gap: 14px;
                }

                /* =========================
                   TEXTO
                ========================== */

                .companies-intro {
                    padding: 8px 10px;

                    min-width: 0;
                }

                .mexico-label {
                    display: inline-flex;
                    align-items: center;

                    padding: 8px 14px;

                    border-radius: 20px;

                    background: #E7F5F8;

                    color: #27728A;

                    font-size: 11px;
                    font-weight: 800;

                    letter-spacing: 1.5px;

                    margin-bottom: 14px;
                }

                .companies-intro h2 {
                    margin: 0;

                    color: #344454;

                    font-size: 20px;
                    line-height: 1.4;

                    font-weight: 800;
                }

                /* =========================
                   LOGOS
                ========================== */

                .company-card {
                    width: 100%;
                    height: 90px;

                    min-width: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 10px;

                    border: none;
                    border-radius: 18px;

                    cursor: pointer;

                    overflow: hidden;

                    appearance: none;

                    transition:
                        transform .2s ease,
                        box-shadow .2s ease;
                }

                .company-card img {
                    display: block;

                    max-width: 100%;
                    max-height: 100%;

                    object-fit: contain;
                }

                /* =========================
                   MÁS
                ========================== */

                .more-card {
                    width: 100%;
                    height: 90px;

                    min-width: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    gap: 8px;

                    padding: 10px;

                    border: none;
                    border-radius: 18px;

                    background: #ffffff;

                    color: #25445D;

                    cursor: pointer;

                    appearance: none;

                    transition:
                        transform .2s ease,
                        box-shadow .2s ease;
                }

                .more-card span {
                    font-size: 11px;
                    font-weight: 800;
                    line-height: 1.2;
                }

                /* =========================
                   TABLET
                ========================== */

                @media (max-width: 1000px) {

                    .companies-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .companies-intro {
                        grid-column: 1 / -1;
                    }

                }

                /* =========================
                   TABLET PEQUEÑA
                ========================== */

                @media (max-width: 768px) {

                    .companies-hero {
                        min-height: 500px;
                    }

                    .companies-hero-overlay {
                        background:
                            linear-gradient(
                                90deg,
                                rgba(6,29,50,.94),
                                rgba(8,42,71,.62)
                            );
                    }

                    .companies-hero-content {
                        padding: 70px 20px 120px;
                    }

                    .companies-hero h1 {
                        font-size: clamp(36px, 8vw, 50px);
                    }

                    .companies-hero p {
                        font-size: 16px;
                    }

                    .companies-section {
                        margin-top: -55px;

                        padding:
                            0 16px 60px;
                    }

                    .companies-box {
                        padding: 22px;

                        border-radius: 25px;
                    }

                    .companies-grid {
                        grid-template-columns: repeat(2, 1fr);

                        gap: 12px;
                    }

                    .companies-intro {
                        grid-column: 1 / -1;
                    }

                    .companies-intro h2 {
                        font-size: 19px;
                    }

                    .company-card,
                    .more-card {
                        height: 85px;
                    }

                }

                /* =========================
                   CELULAR
                ========================== */

                @media (max-width: 600px) {

                    .companies-hero {
                        min-height: 500px;
                    }

                    .companies-hero-image img {
                        object-position: center;
                    }

                    .companies-hero-overlay {
                        background:
                            linear-gradient(
                                90deg,
                                rgba(6,29,50,.95) 0%,
                                rgba(8,42,71,.78) 60%,
                                rgba(8,42,71,.42) 100%
                            );
                    }

                    .companies-hero-content {
                        padding:
                            55px 18px 110px;
                    }

                    .companies-label {
                        font-size: 10px;

                        padding:
                            9px 14px;
                    }

                    .companies-hero h1 {
                        margin-top: 20px;

                        font-size: 38px;

                        line-height: 1.08;
                    }

                    .desktop-break {
                        display: none;
                    }

                    .companies-hero p {
                        font-size: 15px;

                        line-height: 1.6;
                    }

                    .companies-section {
                        margin-top: -50px;

                        padding:
                            0 14px 50px;
                    }

                    .companies-box {
                        padding: 18px;

                        border-radius: 22px;
                    }

                    .companies-grid {
                        grid-template-columns:
                            repeat(2, 1fr);

                        gap: 10px;
                    }

                    .companies-intro {
                        padding:
                            2px 2px 12px;
                    }

                    .mexico-label {
                        font-size: 10px;

                        padding:
                            7px 12px;

                        margin-bottom: 10px;
                    }

                    .companies-intro h2 {
                        font-size: 17px;

                        line-height: 1.35;
                    }

                    .company-card,
                    .more-card {
                        height: 78px;

                        border-radius: 15px;

                        padding: 8px;
                    }

                    .more-card {
                        gap: 5px;
                    }

                    .more-card span {
                        font-size: 10px;
                    }

                }

                /* =========================
                   CELULAR PEQUEÑO
                ========================== */

                @media (max-width: 380px) {

                    .companies-hero {
                        min-height: 470px;
                    }

                    .companies-hero-content {
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .companies-hero h1 {
                        font-size: 34px;
                    }

                    .companies-box {
                        padding: 14px;
                    }

                    .companies-grid {
                        gap: 8px;
                    }

                    .company-card,
                    .more-card {
                        height: 72px;
                    }

                }

            `}</style>

        </main>
    );
}