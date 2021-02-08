import React, { useEffect, useState } from 'react';
import { Badge, Carousel, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { StatsPairDTO } from 'src/@common/dto';
import { StatsBestPairsResponse } from 'src/@common/models';
import { roundNumber } from 'src/@common/utils';
import { fetchBestPairs } from 'src/redux/services/stats.service';
import { getLabel } from './helper';

type StatsType = {
	ever: Array<StatsPairDTO>;
	week: Array<StatsPairDTO>;
	month: Array<StatsPairDTO>;
};
const aWeekAgo = new Date();
aWeekAgo.setDate(aWeekAgo.getDate() - 7);
const aMonthAgo = new Date();
aMonthAgo.setMonth(aMonthAgo.getMonth() - 1);

interface TheBestsProps {}
// eslint-disable-next-line sonarjs/cognitive-complexity
const TheBests: React.FC<TheBestsProps> = () => {
	const MAX_RESULT = 3;
	const { t } = useTranslation(['stats']);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [stats, setStats] = useState<StatsType>();
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex: number, event: Record<string, unknown> | null) => {
		setIndex(selectedIndex);
	};
	useEffect(() => {
		if (!loaded) {
			(async () => {
				try {
					const { stats: ever } = (await fetchBestPairs({})) as StatsBestPairsResponse;
					const { stats: week } = (await fetchBestPairs({ from: aWeekAgo })) as StatsBestPairsResponse;
					const { stats: month } = (await fetchBestPairs({ from: aWeekAgo })) as StatsBestPairsResponse;
					setStats({ ever, week, month });
				} catch (error) {
					console.log('Error');
				} finally {
					setLoaded(true);
				}
			})();
		}
	}, [loaded]);

	// https://www.w3schools.com/howto/howto_css_user_rating.asp
	const getPairs = (pairStats: Array<StatsPairDTO>, key: string) =>
		pairStats ? (
			<>
				<Row>
					<Col md={{ span: 2, offset: 2 }} style={{ textAlign: 'right' }}>
						Coppia
					</Col>
					<Col md="4" style={{ textAlign: 'left' }}>
						Percentuali Vittorie ( {t(`stats:${key}`)} )
					</Col>
				</Row>
				{pairStats
					.filter((v, i) => (pairStats.length >= MAX_RESULT ? i < MAX_RESULT : i > -1))
					.map((p, ii) => (
						<Row>
							<Col
								md={{ span: 2, offset: 2 }}
								style={{ textAlign: 'right', float: 'left', width: '15%', marginTop: '10px', fontSize: 'large' }}
							>
								<i>
									<strong>
										{getLabel(p.player1)} - {getLabel(p.player2)}
									</strong>
								</i>
							</Col>
							<Col md="4" style={{ marginTop: '10px', float: 'left', width: '70%' }}>
								<div style={{ width: '100%', backgroundColor: '#f1f1f1', textAlign: 'center', color: 'white' }}>
									<div
										style={{
											width: `${roundNumber((p.totwin / p.totMatch) * 100, 1)}%`,
											height: '18px',
											backgroundColor: '#ffc107',
										}}
									></div>
								</div>
							</Col>
							<Col
								md={{ span: 2 }}
								style={{ textAlign: 'left', float: 'left', width: '15%', marginTop: '10px', fontSize: 'large' }}
							>
								{roundNumber((p.totwin / p.totMatch) * 100, 1)}%
							</Col>
						</Row>
					))}
			</>
		) : null;

	return stats && Object.keys(stats).length > 0 ? (
		<Carousel activeIndex={index} onSelect={handleSelect} className="mt-3" fade={true}>
			{Object.keys(stats).map((key, ii) =>
				stats[key as keyof StatsType].length > 0 ? (
					<Carousel.Item key={`${key}-${ii * 18}`}>{getPairs(stats[key as keyof StatsType], key)}</Carousel.Item>
				) : null
			)}
		</Carousel>
	) : null;
};

export default TheBests;

/*
	<article>
		<h3>{t(`stats:${key}`)}</h3>
		<hr />
		{getPairs(stats[key as keyof StatsType], key)}
	</article>
*/
