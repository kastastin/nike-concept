import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => (
	<section className="max-container flex flex-wrap justify-center gap-9">
		{services.map((service) => (
			<ServiceCard key={service.label} {...service} />
		))}
	</section>
);

export default Services;
