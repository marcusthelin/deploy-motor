publish:
	docker build -t marcusthelin/deploy-machine ./services/motor
	docker push marcusthelin/deploy-machine