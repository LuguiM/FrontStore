import Adidas from '../../assets/companies/Adidas.png'
import Avon from '../../assets/companies/Avon.png'
import Gucci from '../../assets/companies/Gucci.png'
import Puma from '../../assets/companies/Puma.png'
import Rolex from '../../assets/companies/Rolex.png'

const companies = [Adidas, Rolex, Puma, Gucci, Avon]

export const Companies = () => {
    return (
        <section className="overflow-hidden w-full py-4">
            <div className="flex min-w-max animate-marquee whitespace-nowrap">
                {companies.concat(companies).map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Company ${index}`}
                        className="w-auto mx-8 inline-block"
                    />
                ))}
            </div>
        </section>
    )
}
