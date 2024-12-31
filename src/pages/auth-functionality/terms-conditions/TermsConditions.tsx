import { CommonButton } from '@muc/components';
import React from 'react';
import { COLORS } from '@muc/constant';
import { StyledContainer, Heading, FlexRow } from './TermsConditions.styles'
import { useNavigate } from 'react-router-dom';

interface TermsConditionsProps { }

const TermsConditions: React.FC<TermsConditionsProps> = (): React.ReactElement => {
    const navigate = useNavigate();

    return (
        <StyledContainer >
            <Heading variant="h2" gutterBottom>
                Terms and Conditions
            </Heading>
            <Heading variant="body2" gutterBottom style={{ textAlign: 'left' }}>
                Lorem ipsum dolor sit amet consectetur. Auctor diam augue turpis sem augue tincidunt
                adipiscing facilisi. Accumsan id ut nisl semper ultricies arcu semper congue. Elit gravida
                lacus tellus quis vel enim. Et tellus amet ligula ornare arcu ullamcorper. Integer rhoncus
                lectus tempus eget viverra sapien non tincidunt duis. Nunc elementum dui vulputate id
                habitant proin. Et et sed placerat eget vitae orci amet eget. Fringilla quis nam aliquet
                pretium. Eu elementum dignissim nisl tristique scelerisque turpis ut ac. Gravida lectus in
                consequat lorem nunc. Metus a laoreet venenatis vestibulum tincidunt eleifend magna lacus in.
                Enim facilisis convallis quis lobortis ultrices tempus imperdiet. Velit amet fermentum curabitur
                feugiat dui metus. Id ornare quis vivamus rhoncus nulla feugiat sed ornare tincidunt. Elit nec
                vulputate dapibus nulla lectus leo in. Lorem ipsum dolor sit amet consectetur. Auctor diam augue
                turpis sem augue tincidunt adipiscing facilisi. Accumsan id ut nisl semper ultricies arcu semper
                congue. Elit gravida lacus tellus quis vel enim. Et tellus amet ligula ornare arcu ullamcorper.
                Integer rhoncus lectus tempus eget viverra sapien non tincidunt duis. Nunc elementum dui vulputate
                id habitant proin. Et et sed placerat eget vitae orci amet eget. Fringilla quis nam aliquet pretium.
                Eu elementum dignissim nisl tristique scelerisque turpis ut ac. Gravida lectus in consequat lorem nunc.
                Metus a laoreet venenatis vestibulum tincidunt eleifend magna lacus in. Enim facilisis convallis quis
                lobortis ultrices tempus imperdiet. Velit amet fermentum curabitur feugiat dui metus. Id ornare quis
                vivamus rhoncus nulla feugiat sed ornare tincidunt. Elit nec vulputate dapibus nulla lectus leo in.
            </Heading>
            <FlexRow>
                <CommonButton
                    type="submit"
                    variant="outlined"
                    title="Cancel"
                    bgColor={COLORS.blue.navyBlue}
                    onClick={() => {navigate('/login')}}
                />
                <CommonButton
                    type="submit"
                    variant="contained"
                    title="Accept"
                    bgColor={COLORS.blue.navyBlue}
                />
            </FlexRow>
        </StyledContainer>
    );
}

export default TermsConditions;