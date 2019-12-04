// Would recommend moving this into a separate /src/hooks/gravityforms.js file
// and import where needed
import { useStaticQuery, graphql } from 'gatsby'
const allGravityData = () => {
    const { allGfForm } = useStaticQuery(
        graphql`
			query {
				gfForm(formId: {eq: 1}) {
					formId
					slug
					apiURL
					descriptionPlacement
					formFields {
						id
						label
						labelPlacement
						description
						descriptionPlacement
						type
						choices
						content
						errorMessage
						inputMaskValue
						isRequired
						visibility
						cssClass
						placeholder
						size
						defaultValue
						maxLength
					}
					button {
						text
					}
					confirmations {
						message
					}
				}
			}
        `
    )
    return allGfForm
}
export default allGravityData;
