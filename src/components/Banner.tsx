import styled from 'styled-components';
import { IContent } from '../interface';
import { useTranslation } from 'react-i18next';
import { getImgPath } from '../utils/utilsFn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMatch, useNavigate } from 'react-router-dom';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../src/assets/logo.svg';
interface IBannerProps {
  section: string;
  content?: IContent;
}

export default function Banner({ section, content }: IBannerProps) {
  const navigate = useNavigate();
  const onMoreButtonClick = (id: number) => {
    navigate(`?id=${id}`);
  };
  const { t } = useTranslation();
  return (
    <>
      {content && (
        <Container
          backdropBg={getImgPath(content.backdrop_path)}
          posterBg={getImgPath(content.poster_path)}
        >
          <RankingContainer>
            <RankingLogo src={logo} alt='Netflix logo' />
            <RankingText>
              {section === 'movie' ? t('banner.movie') : t('banner.tv')}
            </RankingText>
          </RankingContainer>

          <Title>{section === 'movie' ? content.title : content.name}</Title>

          <DateAndRatingContainer>
            <Date>
              {section === 'movie'
                ? t('label.release') + ': ' + content.release_date ||
                  t('label.none')
                : t('label.firstAir') + ': ' + content.first_air_date ||
                  t('label.none')}
            </Date>
            <Rating>
              {content.vote_average !== null
                ? t('label.rating') +
                  ': ⭐' +
                  Math.round(content.vote_average * 10) / 10
                : t('label.rating') + ': ⭐' + t('label.none')}
            </Rating>
          </DateAndRatingContainer>

          <Overview>{content.overview || t('banner.altText')}</Overview>

          <MoreBtn onClick={() => onMoreButtonClick(content.id)}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>{t('banner.button')}</span>
          </MoreBtn>
        </Container>
      )}
    </>
  );
}

const Container = styled.div<{ backdropBg: string; posterBg: string }>`
  width: 100%;
  height: 56.25vw;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.backdropBg});

  @media (max-width: 1023px) {
    height: 90vw;
    padding: 0 40px;
  }

  @media (max-width: 479px) {
    align-items: center;
    height: 150vw;
    padding: 0 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
      url(${(props) => props.posterBg});
  }
`;

const RankingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RankingLogo = styled.img`
  width: 1.6vw;
  margin-right: 5px;
  height: 2%.0vw;
  @media (max-width: 1023px) {
    width: 20px;
    height: 20px;
  }
`;

const RankingText = styled.h1`
  font-size: 1.6vw;
  font-weight: 700;
  ${({ theme }) => theme.textShadow};

  @media (max-width: 1023px) {
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.6vw;
  font-weight: 700;
  margin-bottom: 20px;
  ${({ theme }) => theme.textShadow};

  @media (max-width: 1023px) {
    font-size: 32px;
  }

  @media (max-width: 479px) {
    text-align: center;
  }
`;

const DateAndRatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 10px;
  font-size: 0.9vw;

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

const Date = styled.span`
  color: ${({ theme }) => theme.green};
`;

const Rating = styled.span`
  margin-left: 10px;
`;

const Overview = styled.p`
  width: 40%;
  margin-bottom: 20px;
  font-size: 1.2vw;
  word-wrap: break-word;
  word-break: keep-all;
  ${({ theme }) => theme.textShadow};
  ${({ theme }) => theme.MaxLines(3)};

  @media (max-width: 1023px) {
    width: 60%;
    font-size: 16px;
  }

  @media (max-width: 479px) {
    display: none;
  }
`;

const MoreBtn = styled.div`
  width: fit-content;
  padding: 10px 30px;
  border-radius: 4px;
  font-size: 1.2vw;
  font-weight: 700;
  color: black;
  span {
    margin-left: 10px;
  }
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);

  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;
