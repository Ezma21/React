/* 
Skapa en mer avancerad React setup. 
Här skapar vi två komponenter. En som heter Section och en Experience.
Vi lägger till olika props (eller argument som vi kallar det i javascript) där vi kan skicka in olika 
information.
*/
function Section({ title, children }) {
	return (
		<section>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

function Experience({ jobTitle, company, dates, description }) {
	return (
		<div>
			<h3>
				{jobTitle} at {company}
			</h3>
			<p>{dates}</p>
			<p>{description}</p>
		</div>
	);
}

/*
Vi använder oss sedan av dessa två komponenter tillsammans genom att skriva följande kod:
Här renderar vi componenten Section med titlen "work experience".
Inuti section renderar vi sen ut två komponenter av typen Experience som innehåller olika värden.
Slutligen renderar vi ut det till vårt div-element i vår html-fil med id="my-advanced-component"
*/
ReactDOM.render(
	<Section title="Work Experience">
		<Experience
			jobTitle="Software Developer"
			company="XYZ Corp"
			dates="2020–Present"
			description="Developed and maintained React applications."
		/>
		<Experience
			jobTitle="Frontend Intern"
			company="ABC Ltd"
			dates="2018–2020"
			description="Assisted in designing user interfaces for e-commerce sites."
		/>
	</Section>,
	document.getElementById("my-advanced-component")
);
